# Kood/Jõhvi workshop project

Choose your poison!

| Variant              | Directory       | Readme                              |
| -------------------- | --------------- | ----------------------------------- |
| jQuery               | jquery-variant  | [here](./jquery-variant/README.md)  |
| React.js             | react-variant   | [here](./react-variant/README.md)   |
| Plain old JavaScript | vanilla-variant | [here](./vanilla-variant/README.md) |


## Table of contents

- [Task](#task)
  - [Task variant 1](#task-variant-1)
  - [Task variant 2](#task-variant-2)
- [Links](#links)
- [Authorisation](#authorisation)
- [API requests](#api-requests)


## Task

_We have two variations of the task described below. The workshop will focus on one. Read the [backstory](#backstory) to get an idea of the application you will be working with, and then continue with either [variant 1](#task-variant-1) or [variant 2](#task-variant-2) as instructed by the workshop hosts._

<div style="padding-left: 1rem; border-left: 3px solid #1F9C5D;">

#### Backstory

We have an application that allows us to manage Employees and Projects within our company. Both Employees and Projects have their own profile pages, where all the known information about a respective Employee or Project is shown. This information includes the usual suspects (e.g. for an Employee: name, start date at the company, last profile modification date; for a Project: name, start date, last modification date; other metadata) as well as relational data. Relational data can include e.g. all the Projects where a given Employee is included in, or all the Employees that are currently in the team for a given Project. We are interested in bringing Employees together with Projects.
</div>

### Task variant 1
_Employee view — project suggestions for an Employee_

<div style="padding-left: 1rem; border-left: 3px solid #1F9C5D;">

#### Description

This task is to add a new section (Suggestions) to the Employee profile page. The section will suggest Projects that the Employee could participate in.

Every Project has Technologies, which are either required or needed to carry out the project. Every Employee has Skills, which an Employee can contribute to a Project.

Note that a Project's Technologies are a vetted list of items that are agreed upon beforehand. An Employee's Skills list is a mix of handpicked and freely added items (as in every Employee can list whatever skills they have).

#### Acceptance criteria

Given an Employee with eid=\<id\>, find and list the Projects which have Technologies that match with the Skills defined for the Employee (i.e. at least one case where Skill=Technology), meaning the Employee is potentially suited for these Projects.
</div>


### Task variant 2
_Project view — employee suggestions for a Project_

<div style="padding-left: 1rem; border-left: 3px solid #1F9C5D;">

#### Description

This task is to add a new section (Suggestions) to the Project profile page. The section will suggest Employees that could be interested in participating in the given Project.

Every Project has Technologies, which are either required or needed to carry out the project. Every Employee has Skills, which an Employee can contribute to a Project.

Note that a Project's Technologies are a vetted list of items that are agreed upon beforehand. An Employee's Skills list is a mix of handpicked and freely added items (as in every Employee can list whatever skills they have).

#### Acceptance criteria

Given a Project with pid=\<id\>, find and list the Employees who have Skills that match with the Technologies defined for the Project (i.e. at least one case where Skill=Technology), meaning the Project is potentially suited for these Employees.
</div>


## Links

| Link              | URL                                             |
| ----------------- | ----------------------------------------------- |
| Jira              | https://intra.proekspert.ee/jira/               |
| Demo UI           | https://intra.proekspert.ee/pulse-johvi         |
| API location      | https://intra.proekspert.ee/pulse-johvi/api/    |
| API documentation | https://intra.proekspert.ee/pulse-johvi/api-doc |

Access: **user:user**


## Authorisation

The authorisation endpoint is:
```
POST https://intra.proekspert.ee/pulse-johvi/auth
```

Request headers:
```http
"Content-type: application/json"
```

Request body:
```json
{"username":"<username>", "password":"<password>"}
```

The response is a JSON object containing a token. For example:
```json
{"token": "ab079ba2b10d4d97b8c3fcb0aa8ca847b501efc1faa22b8f69edf121ac2996be"}
```

For any subsequent queries, this token needs to be included in the request headers. For example:
```http
"Authorization: Bearer ab079ba2b10d4d97b8c3fcb0aa8ca847b501efc1faa22b8f69edf121ac2996be"
```

Token lifetime: 30 mins.


## API requests

Requesting all employees:
```
GET https://intra.proekspert.ee/pulse-johvi/api/employees
```

Requesting a single employee with ID \<eid\>:
```
GET https://intra.proekspert.ee/pulse-johvi/api/employees/<eid>
```

Requesting all projects:
```
GET https://intra.proekspert.ee/pulse-johvi/api/projects
```

Requesting a single project with ID \<pid\>:
```
GET https://intra.proekspert.ee/pulse-johvi/api/projects/<pid>
```

Additionally, the GET requests support Query Refinement functionality, which means we can manipulate the result of the request via additional URL parameters. For the given tasks we mostly use expansion, which instructs the request to return fully populated subobjects.

For example, requesting Employee info while also populating the contact info:
```
GET https://intra.proekspert.ee/pulse-johvi/api/employees/<eid>?expand=contacts
```
