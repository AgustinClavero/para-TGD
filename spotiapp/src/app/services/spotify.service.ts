import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {
    console.log('Spotify service listo!!!')
   }

getQuery( query:string){
  const url= `https://api.spotify.com/v1/${query}`;

  const headers=new HttpHeaders({
    'Authorization': 'Bearer BQDG0a1KATG6ZvRIyJ-C2ELbjiJ6VrvPyeK1K7iZjmOfY_IOJVKCkKKj1gPpYMInn8DNSVl4ewO6e1FJNtdRHbQ2t8aRW1X3SkpmPHcyhU3XIxQDL5Q2vTNHYlM5ApITQip4up2WiJC32W0Stk3UOc5qfRYfKCbYMS0'
  });

  return this.http.get(url,{ headers });
  
}

getNewReleases(){


return this.getQuery('browse/new-releases')
           .pipe(map((data:any) => data.albums.items ));                    
}


getArtistas(termino: string){

  return this.getQuery(`search?q=${termino}&type=artist`)
             .pipe(map((data:any) => data.artists.items));
}

getArtista( id: string){

  return this.getQuery(`artists/${id}`);
             
}

getTopTracks( id: string){

  return this.getQuery(`artists/${id}/top-tracks?country=us`)
             .pipe(map((data:any) => data.tracks));
             
}


}
