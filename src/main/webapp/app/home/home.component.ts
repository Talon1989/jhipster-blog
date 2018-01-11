import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { Account, LoginModalService, Principal } from '../shared';
import {Post} from "../entities/post/post.model";
import {PostService} from "../entities/post/post.service";
import {ResponseWrapper} from "../shared/model/response-wrapper.model";
// import {Post} from "../entities/post/post.model";
// import {PostService} from "../entities/post/post.service";
// import {ResponseWrapper} from "../shared/model/response-wrapper.model";

@Component({
    selector: 'jhi-home',
    templateUrl: './home.component.html',
    styleUrls: [
        'home.css'
    ]

})
export class HomeComponent implements OnInit {
    ngOnInit() {
        console.log('ngOnInit...');
        this.loadAll();
    }

    posts: Post[] = [];

    constructor(private postService : PostService){}

    loadAll(){
        this.postService.query().subscribe(
            (res: ResponseWrapper) => {
                console.log(res.json);
                this.posts = res.json;
            },
            (res: ResponseWrapper) => {
                console.log(res.json);
            }
        )
    }



    // account: Account;
    // modalRef: NgbModalRef;
    //
    // constructor(
    //     private principal: Principal,
    //     private loginModalService: LoginModalService,
    //     private eventManager: JhiEventManager
    // ) {
    // }
    //
    // ngOnInit() {
    //     this.principal.identity().then((account) => {
    //         this.account = account;
    //     });
    //     this.registerAuthenticationSuccess();
    // }
    //
    // registerAuthenticationSuccess() {
    //     this.eventManager.subscribe('authenticationSuccess', (message) => {
    //         this.principal.identity().then((account) => {
    //             this.account = account;
    //         });
    //     });
    // }
    //
    // isAuthenticated() {
    //     return this.principal.isAuthenticated();
    // }
    //
    // login() {
    //     this.modalRef = this.loginModalService.open();
    // }
}
