import { Component } from '@angular/core';
import { Bug } from './models/Bug';

import { BugOperationsService } from './services/bugOperations.service';

@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{
	bugs : Bug[] = [];
	
	constructor(private bugOperations : BugOperationsService){

	}

	onCreateNew(newBugName){
		let newBug : Bug = this.bugOperations.createNew(newBugName);
		//this.bugs.push(newBug);
		this.bugs = [...this.bugs, newBug];
	}

	onBugClick(bugToToggle : Bug){
		//let toggledBug = this.bugOperations.toggle(bugToToggle);
		bugToToggle.isClosed = !bugToToggle.isClosed;
		//this.bugs = this.bugs.map(bug => bug === bugToToggle ? toggledBug : bug);
		this.bugs = [...this.bugs];
	}

	

	onRemoveClosedClick(){
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}

	getTruncatedText(str){
		console.log('getTruncatedText triggered');
		return str.length <= 30 ? str : str.substr(0,30) + '...';
	}
}