import { Injectable } from '@angular/core';
import axios from 'axios';
import { Bug } from '../models/Bug';
import { BugOperationsService } from './bugOperations.service';

@Injectable()
export class BugServerService{
	private baseUrl = 'http://localhost:3000/bugs';

	constructor(private bugOperations : BugOperationsService){

	}
	getAll() : Promise<Bug[]>{
		return axios
			.get(this.baseUrl)
			.then(response => response.data)
	}
	addNew(bugName : string) : Promise<Bug> {
		let newBugData = this.bugOperations.createNew(bugName);
		return axios
			.post(this.baseUrl, newBugData)
			.then(response => response.data)
	}
	toggle(bugToToggle : Bug) : Promise<Bug>{
		let toggledBug = this.bugOperations.toggle(bugToToggle);
		return axios
			.put(`${this.baseUrl}/${bugToToggle.id}`, toggledBug)
			.then(response => response.data);
	}
	remove(bug : Bug) : Promsie<void>{
		return axios
			.delete(`${this.baseUrl}/${bug.id}`)
			.then(response => response.data);	
	}
}