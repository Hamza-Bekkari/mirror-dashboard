import { Component, Input, Output, OnInit } from '@angular/core';
import { Data } from '../../models/data.model';
import { AvatarService } from '../../services/avatar.service';
import { MetService } from '../../services/met.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() data: Data;
  @Input() cardWidth: number;
  @Input() cardHeight: number;
  public width: number;
  public height: number;
  public padding: string;
  private avatarSize = "95";
  private avatarPath = "https://api.adorable.io/avatars/" + this.avatarSize + "/";
  private avatarFileend = "@adorable.io.png"
  private image: any;

  constructor(
    private avatarService: AvatarService,
    private metService: MetService,
    ) {};

  ngOnInit() {
    this.setPadding();
    this.getAvatar();
    // this.getImage();
  }

  public setPadding(topBottom = 16, leftRight = topBottom) {
    this.height = this.cardHeight - (topBottom * 2);
    this.width = this.cardWidth - (leftRight * 2);
    this.padding = topBottom + 'px ' + leftRight + 'px';
  }

  public getAvatar() {
    this.data.avatarUrl = this.avatarService.randomAvatarUrl();
  }

  public getImage() {
    this.metService.getImageUrl()
      .subscribe((response: Data) => {
        this.image = response.primaryImageSmall;
        // console.log('Met Url: ', this.image);
      });
  }

  private randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
