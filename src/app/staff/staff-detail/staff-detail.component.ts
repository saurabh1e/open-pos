import {Component, OnInit} from "@angular/core";
import {LoadingMode, LoadingType, TdLoadingService} from "@covalent/core";
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
  userShops: any[] = [];

  constructor(public dialogRef: MdDialogRef<StaffDetailComponent>,
              private _userService: UsersService,
              private _roleService: RolesService,
              private _loadingService: TdLoadingService,) {
    this._loadingService.create({
      name: 'orders',
      type: LoadingType.Circular,
      mode: LoadingMode.Indeterminate,
      color: 'warn',
    });
  }

  ngOnInit() {

    this.userShops = this.shops.filter((shop) => {
      return this.user.retail_shop_ids.indexOf(shop.id) > -1
    })
  }

  close(): void {
    this.dialogRef.close();
  }

  updateRole(role: Role): void {
    this._loadingService.register('staffDetail');
    if (this.checkUserRole(role)) {
      this._roleService.updateRoleAccess(this.user.id, role.id, 'remove').subscribe((data) => {
        this.user.roles.splice(this.user.roles.indexOf(role), 1);

        let permissions = this.user.permissions.filter((permission) => {
          return role.permissions.findIndex((rolePermission) => {
              return rolePermission.id === permission.id
            }) > -1
        });
        this._roleService.updatePermissionAccess(permissions.map((permission) => {
          return {__action: 'remove', user_id: this.user.id, permission_id: permission.id}
        })).subscribe(() => {
          this.user.permissions = this.user.permissions.filter((permission) => {
            return role.permissions.findIndex((rolePermission) => {
                return rolePermission.id === permission.id
              }) < 0;
          });
          this._loadingService.resolve('staffDetail');
        })
      })

    }
    else {
      this._roleService.updateRoleAccess(this.user.id, role.id, 'add').subscribe((data) => {
        this.user.roles.push(role);
        let permissions = role.permissions.filter((rolePermission) => {
          return !this.checkUserPermission(rolePermission)
        });
        this._roleService.updatePermissionAccess(permissions.map((permission) => {
          return {__action: 'add', user_id: this.user.id, permission_id: permission.id}
        })).subscribe(() => {
          this.user.permissions = this.user.permissions.concat(permissions);
          this._loadingService.resolve('staffDetail');
        })
      });

    }
  }

  updatePermission(permission: Permission): void {
    this._loadingService.register('staffDetail');
    if (this.checkUserPermission(permission)) {
      this._roleService.updatePermissionAccess([{
        user_id: this.user.id,
        permission_id: permission.id, __action: 'remove'
      }]).subscribe((data) => {
        this.user.permissions.splice(this.user.permissions.indexOf(permission), 1);
        this._loadingService.resolve('staffDetail');
      })
    }
    else {
      this._roleService.updatePermissionAccess([{
        user_id: this.user.id,
        permission_id: permission.id, __action: 'add'
      }]).subscribe((data) => {
        this.user.permissions.push(permission);
        this._loadingService.resolve('staffDetail');
      })
    }
  }

  checkUserRole(role: Role): boolean {
    return this.user.roles.findIndex((userRole) => {
        return userRole.id == role.id
      }) > -1
  }

  checkUserPermission(permission: Permission): boolean {
    return this.user.permissions.findIndex((userPermission) => {
        return userPermission.id == permission.id
      }) > -1
  }

  addShop(event) {
    this._loadingService.register('staffDetail');
    this._userService.updateShopAccess(this.user.id, event.id, 'add').subscribe(() => {
      this._loadingService.resolve('staffDetail');
    }, () => {
      this.userShops.splice(this.userShops.indexOf(event), 1);
      this._loadingService.resolve('staffDetail');
    })
  }

  removeShop(event) {
    this._loadingService.register('staffDetail');
    this._userService.updateShopAccess(this.user.id, event.id, 'remove').subscribe(() => {
      this._loadingService.resolve('staffDetail');
    }, () => {
      this.userShops.push(event);
      this._loadingService.resolve('staffDetail');
    })
  }


  saveState() {
    this._loadingService.register('staffDetail');
    this._userService.update(this.user.id, this.user).subscribe(() => {
      this._loadingService.resolve('staffDetail');
    })
  }

}
