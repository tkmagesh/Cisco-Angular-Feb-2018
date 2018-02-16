import { Component, EventEmitter, Output } from '@angular/core';
import { BugStorageService } from '../../services/bugStorage.service';
import { Bug } from '../../models/Bug';

@Component({
	selector : 'app-bug-edit',
	templateUrl : 'bugEdit.component.html'
})
export class BugEditComponent{

	@Output()
	bugAdded : EventEmitter<Bug> = new EventEmitter<Bug>();

	constructor(private bugStorage : BugStorageService ){

	}

	onCreateNew(newBugName){
		let newBug : Bug = this.bugStorage.addNew(newBugName);
		//this.bugs.push(newBug);
		//this.bugs = [...this.bugs, newBug];
		this.bugAdded.emit(newBug);
	}
}