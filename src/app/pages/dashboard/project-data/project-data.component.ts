import { Component, OnInit } from '@angular/core';
import { TableData } from '../../../models/tableData.model';

@Component({
  selector: 'app-project-data',
  templateUrl: './project-data.component.html',
  styleUrl: './project-data.component.scss'
})
export class ProjectDataComponent implements OnInit {
  projectsTable: TableData;

  constructor() { }

  ngOnInit(): void {
    this.projectsTable = {
      headers: ['Project Name', 'Team', 'Description'],
      rows: [
        ['Project A', 'Dev Team 1', 'Developing a cutting-edge mobile app for real-time language translation.'],
        ['Project B', 'AI Team', 'Implementing machine learning algorithms for intelligent chatbot interactions.'],
        ['Project C', 'Security Team', 'Enhancing cybersecurity protocols for a secure cloud infrastructure.'],
        ['Project D', 'UI/UX Team', 'Revamping the user interface and experience for a popular e-commerce platform.'],
        ['Project E', 'Testing Team', 'Conducting comprehensive testing for a mission-critical financial software application.']
      ]
    };
  }
}
