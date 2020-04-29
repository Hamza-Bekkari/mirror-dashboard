import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AvatarService {
  private avatarSize = "95";
  private avatarRoot = "https://api.adorable.io/avatars/" + this.avatarSize + "/";
  private avatarFileend = "@adorable.io.png"

  constructor(private http: HttpClient) {
  }

  public randomAvatarUrl() {
    const objectId = this.randomInt(100, 999);
    const avatarUrl = this.avatarRoot + objectId + this.avatarFileend;
    // console.log(avatarUrl);
    return avatarUrl;
  }

  private randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
