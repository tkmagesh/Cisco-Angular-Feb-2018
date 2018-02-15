import { Component } from '@angular/core';
import { Bug } from './models/Bug';

import { BugOperationsService } from './services/bugOperations.service';


@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{
	bugs : Bug[] = [];

	/*bugOperations : BugOperationsService ;

	constructor(_bugOperations : BugOperationsService){
		this.bugOperations = _bugOperations;
	}
*/
	
	constructor(private bugOperations : BugOperationsService){

	}
	
	onCreateNew(newBugName){
		let newBug : Bug = this.bugOperations.createNew(newBugName);
		this.bugs.push(newBug);
	}

	onBugClick(bugToToggle : Bug){
		this.bugOperations.toggle(bugToToggle);
	}

	getClosedCount(){
		console.log('getClosedCount triggered');
		return this.bugs.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
	}
}