import { Injectable } from '@angular/core';
// TODO move this to its own library. Can be used across apps

import { PreloadingStrategy, Route } from '@angular/router';

import { of, Observable, timer } from 'rxjs';
import { flatMap } from 'rxjs/operators';

@Injectable({
    providedIn: "root"
})
export class MarkedPreloadingStrategy implements PreloadingStrategy {
    preload(route: Route, load: Function): Observable<any> {
        const loadRoute = (delay: number) => delay
            ? timer(delay).pipe(flatMap(_ => load()))
            : load();
        return route?.data?.preload?.preload
            ? loadRoute(route.data.preload?.delay)
            : of(null);
    }
}