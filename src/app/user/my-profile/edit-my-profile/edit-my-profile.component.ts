import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Topic, User} from "../../model/User";
import {UserService} from "../../../service/user/user.service";
import {FormArray, FormBuilder, FormControl, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {InitService} from "../../../materialize/init.service";

@Component({
  selector: 'app-edit-my-profile',
  templateUrl: './edit-my-profile.component.html',
  styleUrls: ['./edit-my-profile.component.css']
})
export class EditMyProfileComponent implements OnInit {

  user!: User | null;
  id!: string | null;

  @Input()
  color: string = 'waves-effect waves-light btn-large btn-floating yellow darken-2';
  @ViewChild("user_role") userRoleSelect!: ElementRef;

  editProfileForm = this.formBuilder.group({
    id: '',
    firstName: new FormControl('',
    [Validators.required,
    Validators.pattern("^[?A-z?Ä-ü?À-ù?Á-ú]*?[-\\s]?[?A-z?Ä-ü?À-ù?Á-ú]+$")] ),
    lastName: new FormControl('',
    [Validators.required,
    Validators.pattern("^[?A-z?Ä-ü?À-ù?Á-ú]*?[-\\s]?[?A-z?Ä-ü?À-ù?Á-ú]+$")]),
    password: '',
    email: '',
    company: '',
    userRole: new FormControl('',
      [Validators.required]),
    coachInformation: this.formBuilder.group({
      id: '',
      coachXp: '',
      introduction: '',
      availability: '',
      topics: this.formBuilder.array([this.formBuilder.group({
        id: '',
        name: ''
      })])
    })
  })

  constructor(private userService: UserService,
              private initService: InitService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.userService.getUserById(this.route.parent!.snapshot.paramMap.get('id'))
      .subscribe(user => {
        this.initService.initSelect();
        this.userRole.disable();
        this.user = user;
        this.editProfileForm.patchValue(this.user);
        if(this.user?.userRole?.toLowerCase() === 'admin'){
          this.userRole.enable();
        }
      });
  }

  cancel() {
    this.router.navigate([`/users/${this.user!.id}/profile`])
  }

  onSubmit() {
    if(this.editProfileForm.invalid){
      this.editProfileForm.markAllAsTouched();
    } else {
      this.updateUser();
    }
  }

  updateUser(): void {
    this.userService.updateUser(this.editProfileForm.value).subscribe(
      user => {
        M.toast({html: `User with id ${user.id} has been successfully updated`});
        this.router.navigate([`/users/${user.id}/profile`]);
      }
    )
  }

  get firstName(): FormControl {
    return this.editProfileForm.get('firstName') as FormControl;
  }

  get lastName(): FormControl {
    return this.editProfileForm.get('lastName') as FormControl;
  }

  get email(): FormControl {
    return this.editProfileForm.get('email') as FormControl;
  }

  get userRole(): FormControl {
    return this.editProfileForm.get('userRole') as FormControl;
  }
}
