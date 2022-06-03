import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PlayerService } from '../services/player.service';

@Injectable({
  providedIn: 'root'
})
export class RefreshGuard implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad {

  constructor(
    private playerService: PlayerService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let player = this.playerService.players
      if(player.length > 0){
        console.log(player);

        return true
      }else{
        console.log('no player');

        this.router.navigate(['/login'])
        return false
      }
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let player = this.playerService.players
      if(player.length > 0){
        return true
      }else{
        this.router.navigate(['/login'])
        return false
      }
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let player = this.playerService.players
      if(player.length > 0){
        return true
      }else{
        this.router.navigate(['/login'])
        return false
      }
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let player = this.playerService.players
      if(player.length > 0){
        return true
      }else{
        this.router.navigate(['/login'])
        return false
      }
  }
}
