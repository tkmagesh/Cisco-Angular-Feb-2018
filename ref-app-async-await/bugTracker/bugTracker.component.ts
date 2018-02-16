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
	async ngOnInit(){
		this.bugs = await this.bugServer.getAll();
	}

	onNewBugAdded(newBug : Bug){
		this.bugs = [...this.bugs, newBug];
	}

	async onBugClick(bugToToggle : Bug){
		let toggledBug = await this.bugServer.toggle(bugToToggle);
		this.bugs = this.bugs.map(bug => bug.id === bugToToggle.id ? toggledBug : bug);
	}
	
	onRemoveClosedClick(){
		this.bugs
			.filter(bug => bug.isClosed)
			.forEach(async closedBug => {
				await this.bugServer.remove(closedBug);
				this.bugs = this.bugs.filter(bug => bug.id !== closedBug.id);
			});
	}

}