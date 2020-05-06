import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState, fromUserSelector } from '@app/store';


@Directive({
    selector: '[hasPermission]'
})
export class HasPermissionDirective {
    private currentUser: string;
    private currentUserAccess: string;
    private permissions = [];

    constructor(
        private viewContainer: ViewContainerRef,
        private templateRef: TemplateRef<any>,
        private store$: Store<RootState>
    ) {}

    private updateView() {
        this.store$.select(fromUserSelector.getUserLoggedInName).subscribe(res => this.currentUser = res);
        this.store$.select(fromUserSelector.getUserLoggedInType).subscribe(res => this.currentUserAccess = res);
        if (this.checkPermission()) {
            console.log('kitni baar aata hun idhar');
            this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
            this.viewContainer.clear();
        }
    }

    @Input()
    set hasPermission(val) {
        this.permissions = val;
        this.updateView();
    }

    private checkPermission() {
        if (!this.permissions.length) {
            console.log(this.permissions);
            return true;
        }
        const hasPermission = false;
        console.log(this.currentUser);
        console.log(this.currentUserAccess);
        if (this.currentUser && this.currentUserAccess) {
            console.log('aa hi jaata hun andar');
            const userRoles = this.currentUserAccess;
            console.log(this.permissions);
            console.log(this.permissions.some((permission) => this.existPermission(userRoles, permission)));
            return this.permissions.some((permission) => this.existPermission(userRoles, permission));
        }

        return hasPermission;
    }

    existPermission(userRoles: string, permission): boolean {
        return userRoles.toUpperCase() === permission.toUpperCase();
    }
}