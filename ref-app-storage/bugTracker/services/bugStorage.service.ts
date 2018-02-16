import { Injectable } from '@angular/core';
import { BugOperationsService } from './bugOperations.service';
import { Bug } from '../models/Bug';

@Injectable()
export class BugStorageService{
	private storage = window.localStorage;
	private currentBugId = 0;

	constructor(private bugOperations : BugOperationsService){

	}
	getAll() : Bug[]{
		let result : Bug[] = [];
		for(let index = 0, count = this.storage.length; index < count; index++){
			let key = this.storage.key(index),
				stringifiedBug = this.storage.getItem(key),
				bug = JSON.parse(stringifiedBug);
			result.push(bug);
			this.currentBugId = this.currentBugId < bug.id ? bug.id : this.currentBugId;
		}
		return result;
	}
	private save(bug : Bug) : Bug {
		this.storage.setItem(bug.id.toString(), JSON.stringify(bug));
		return bug;
	} 
	addNew(bugName : string) : Bug{
		let newBug = this.bugOperations.createNew(bugName, ++this.currentBugId);
		return this.save(newBug);
	}
	toggle(bugToToggle : Bug ) : Bug{
		let toggledBug = this.bugOperations.toggle(bugToToggle);
		return this.save(toggledBug);
	}
	remove(bug : Bug) : void{
		this.storage.removeItem(bug.id.toString());
	}
}