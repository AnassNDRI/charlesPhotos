import { Component, OnInit } from '@angular/core';
import { Picture } from 'src/app/mockData/pictures';

@Component({
  selector: 'app-add-picture',
  templateUrl: './add-picture.component.html',
  styleUrls: ['./add-picture.component.css']
})
export class AddPictureComponent implements OnInit {

  picture: Picture

  ngOnInit() {
      this.picture = new Picture();
  }

}
