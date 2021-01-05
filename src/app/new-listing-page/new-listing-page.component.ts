import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-new-listing-page',
  templateUrl: './new-listing-page.component.html',
  styleUrls: ['./new-listing-page.component.css']
})
export class NewListingPageComponent implements OnInit {
  constructor(
    private router:Router,
    private listsService:ListingsService,
  ) { }

  ngOnInit(): void {
  }
  onSubmit({name,description,price}):void{
    this.listsService.createNewListing(name,description,price)
      .subscribe(()=>{
        this.router.navigateByUrl('/my-listings')
      });
  }
}
