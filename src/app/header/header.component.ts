import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private keycloakService: KeycloakService) { }
  logout() {
    this.keycloakService.logout();
  } 
  firstName: string ='';
  userProfile:KeycloakProfile |null = null;
  async ngOnInit(){
    if(await this.keycloakService.isLoggedIn()){
      this.userProfile = await this.keycloakService.loadUserProfile();
    }
    this.firstName = this.keycloakService.getUsername();
  }

}
