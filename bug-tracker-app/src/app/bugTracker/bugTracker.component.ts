import { Component, OnInit } from '@angular/core';
import { Bug } from './models/Bug';

import { BugServerService } from './services/bugServer.service';


@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent implements OnInit{
	bugs : Bug[] = [];
	
	constructor(private bugServer : BugServerService){
		
	}
	ngOnInit(){
		this.bugServer
			.getAll()
			.subscribe(bugs => this.bugs = bugs);
	}

	onNewBugAdded(newBug : Bug){
		this.bugs = [...this.bugs, newBug];
	}

	onBugClick(bugToToggle : Bug){
		this.bugServer
			.toggle(bugToToggle)
			.subscribe(toggledBug => 
					this.bugs = this.bugs.map(bug => bug.id === bugToToggle.id ? toggledBug : bug)
			);
	}
	
	onRemoveClosedClick(){
		this.bugs
			.filter(bug => bug.isClosed)
			.forEach(closedBug => {
				this.bugServer
					.remove(closedBug)
					.subscribe(() => this.bugs = this.bugs.filter(bug => bug.id !== closedBug.id));
			});
	}

}