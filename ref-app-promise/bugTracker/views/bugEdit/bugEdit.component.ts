import { Component, EventEmitter, Output } from '@angular/core';
import { BugServerService } from '../../services/bugServer.service';
import { Bug } from '../../models/Bug';

@Component({
	selector : 'app-bug-edit',
	templateUrl : 'bugEdit.component.html'
})
export class BugEditComponent{

	@Output()
	bugAdded : EventEmitter<Bug> = new EventEmitter<Bug>();

	constructor(private bugServer : BugServerService ){

	}

	onCreateNew(newBugName){
		this.bugServer
			.addNew(newBugName)
			.then(newBug => this.bugAdded.emit(newBug));
	}
}