import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Requirement } from '../../bean/requirement';
import { RequirementService } from '../../service/requirement.service';

@Component({
  selector: 'app-requirments',
  templateUrl: './requirements.component.html',
  styleUrls: ['../../css/requirements.component.css'],
})
export class RequirementsComponent implements OnInit {
  requirs: Requirement[];
  selectedRequir: Requirement;

  constructor(
    private requirementService: RequirementService,
    private router: Router
  ){}
  getRequirs(): void {
    this.requirementService.getRequirs().then(requirs => this.requirs = requirs);
  }


  add(subject: string): void {
    subject = subject.trim();
    if (!subject) {
      return;
    }
    this.requirementService.create(subject).then(require => {
      this.requirs.push(require);
      this.selectedRequir = null;
    });
  }
  delete(require: Requirement): void {
    this.requirementService.delete(require.id)
    .then(() => {
      this.requirs = this.requirs.filter(r => r !== require);
      if (this.selectedRequir === require) {
        this.selectedRequir = null;
      }
    });
  }

  ngOnInit():void {
    this.getRequirs();
  }
  onSelect(require:Requirement): void{
    this.selectedRequir = require;
  }
  gotoDetail(): void{
    this.router.navigate(['requirements/detail/', this.selectedRequir.id]);
  }

}

