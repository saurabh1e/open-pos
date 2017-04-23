import { Component, OnInit } from '@angular/core';
import {IUser, Permission, Role, RolesService, UsersService} from "../../../services/users.service";
import {MdDialogRef} from "@angular/material";
import {RetailShop} from "../../../services/shop.service";

@Component({
  selector: 'app-staff-detail',
  templateUrl: './staff-detail.component.html',
  styleUrls: ['./staff-detail.component.scss']
})
export class StaffDetailComponent implements OnInit {

  user: IUser;
  roles: Role[];
  shops: RetailShop[];
  userShops: any[] =[];

  constructor(public dialogRef: MdDialogRef<StaffDetailComponent>,
  private _userService: UsersService, private _roleService: RolesService) { }

  ngOnInit() {

   this.userShops = this.shops.filter((shop)=>{return this.user.retail_shop_ids.indexOf(shop.id) > -1})
  }

  close(): void {
    this.dialogRef.close();
  }

  updateRole(role: Role): void {
    if (this.checkUserRole(role)) {
      this.user.roles.splice(this.user.roles.indexOf(role), 1);
      this.user.permissions = this.user.permissions.filter((permission)=>{
        return role.permissions.findIndex((rolePermission)=>{return rolePermission.id === permission.id}) < 0
      });
    }
    else {
      this.user.roles.push(role);
      this.user.permissions=  this.user.permissions.concat(role.permissions)
    }
  }

  updatePermission(permission: Permission): void {
    if (this.checkUserPermission(permission)) {
      this._roleService.updatePermissionAcess(this.user.id,  permission.id, 'remove').subscribe((data)=>{
        this.user.permissions.splice(this.user.permissions.indexOf(permission), 1);
      })
    }
    else {
      this._roleService.updatePermissionAcess(this.user.id,  permission.id, 'add').subscribe((data)=>{
        this.user.permissions.push(permission);
      })
    }
  }

  checkUserRole(role: Role): boolean {
    return this.user.roles.findIndex((userRole)=>{
      return userRole.id == role.id
    }) > -1
  }
  checkUserPermission(permission: Permission): boolean {
    return this.user.permissions.findIndex((userPermission)=>{
        return userPermission.id == permission.id
      }) > -1
  }

  addShop(event) {
    console.log(event);
    this._userService.updateShopAccess(this.user.id, event.id, 'add').subscribe((data)=>{
      console.log(data);
    }, ()=>{
      this.userShops.splice(this.userShops.indexOf(event), 1)
    })
  }

  removeShop(event) {
    this._userService.updateShopAccess(this.user.id, event.id, 'remove').subscribe((data)=>{
      console.log(data);
    }, ()=>{
      this.userShops.push(event)
    })
  }

}
