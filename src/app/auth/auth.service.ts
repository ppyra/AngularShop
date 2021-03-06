import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export interface AuthResponseData {
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string,
    registered?: boolean
}

@Injectable({providedIn: 'root'})
export class AuthService {

    constructor(private http: HttpClient){}

    signup(email:string, password: string){
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCG4eOE4CtNIuoJ5TbVuJ4Z113AzlueU38',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }).pipe(catchError(errorRes => {
                let errorMessage = 'An uknown error occured!';
                if(!errorRes.error || !errorRes.error.error) {
                    return throwError(errorMessage);
                }
                switch(errorRes.error.error.message) {
                    case 'EMAIL_EXISTS':
                        errorMessage = 'The email address is already in use by another account';
                }
                return throwError(errorMessage);
            }))
    }

    login(email: string, password: string){
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]', {
            email: email,
            password: password,
            returnSecureToken: true
        })
    }

}