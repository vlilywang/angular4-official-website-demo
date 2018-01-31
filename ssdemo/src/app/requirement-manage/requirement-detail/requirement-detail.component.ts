import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';


import { Requirement } from '../../bean/requirement';
import { RequirementService } from '../../service/requirement.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'requirement-detail',
  templateUrl: './requirement-detail.component.html',
  styleUrls: ['../../css/user-detail.component.css']
})
export class RequirementDetailComponent implements OnInit {
  requir: Requirement;
  constructor(
    private requirementService: RequirementService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.paramMap
    .switchMap((params: ParamMap) => this.requirementService.getRequir(+params.get('id'))) 
    .subscribe(requir => this.requir = requir);
  }


  save(): void {
    this.requirementService.update(this.requir)
    .then(() => this.goBack());
  }
  
  goBack(): void {
    this.location.back();
  }
}

