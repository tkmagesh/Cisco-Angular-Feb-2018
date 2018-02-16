import { Component, OnInit } from '@angular/core';
import { Bug } from './models/Bug';

import { BugStorageService } from './services/bugStorage.service';

@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent implements OnInit{
	bugs : Bug[] = [];
	
	constructor(private bugStorage : BugStorageService){
		
	}
	ngOnInit(){
		this.bugs = this.bugStorage.getAll();
	}

	onCreateNew(newBugName){
		let newBug : Bug = this.bugStorage.addNew(newBugName);
		//this.bugs.push(newBug);
		this.bugs = [...this.bugs, newBug];
	}

	onBugClick(bugToToggle : Bug){
		let toggledBug = this.bugStorage.toggle(bugToToggle);		
		this.bugs = this.bugs.map(bug => bug === bugToToggle ? toggledBug : bug);
	}

	

	onRemoveClosedClick(){
		this.bugs
			.filter(bug => bug.isClosed)
			.forEach(closedBug => this.bugStorage.remove(closedBug));
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}

}