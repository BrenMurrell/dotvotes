# DotVotes 
This project could be used to run dot voting and project selection for final projects for [@enspiral-dev-academy](https://github.com/enspiral-dev-academy) students

## Documentation

### Database tables

`*` denotes the primary key for the table. Where there are multiple `*` for a given table, this should be considered a composite key.

#### users - User details (mostly populated from Firebase)

| Field      | Type    |  Notes                               |
| --------   | ------- | ------------------------------------ |
| username * | string  | from github                          |
| cohort     | string  | FK from `cohorts.id`                 |

#### cohorts - super simple collection of cohorts

| Field  | Type   | Notes                                 |
| -----  | ------ | ------------------------------------- |
| id *   | string | Cohort slug (e.g. '2020-hihi')        |
| name   | string | Cohort display name (e.g. 'Hihi 2020) |
| campus | string | FK to `campuses.id`

#### projects - Projects for each cohort

| Field   | Type   | Notes                                    |
| -----   | ------ | -------------------------------------    |
| id *    | int    | autoincrement id                         |
| name    | string | name of project                          |
| summary | string | simple 1 or 2 sentences / elevator pitch |
| lead    | string | FK to `users.username                    |
| cohort  | string | FK to `cohorts.id                        |

#### project_members - team members (excluding lead) selected for each project 
| Field        | Type   | Notes                 |
| -----        | ------ | ------------------    |
| project_id * | int    | FK from `projects.id` |
| user *       | string | github username       |

#### voting_rounds - rounds of voting for each project
| Field        | Type   | Notes                                          |
| -----        | ------ | ------------------                             |
| order  *     | int    | for sorting rounds ( normally just 1 & 2 )     |
| cohort_id *  | string | FK from `cohorts.id`                           |
| max_votes    | int    | maximum nunber of votes each person is allowed |

#### votes - recording actual votes
| Field       | Type   | Notes                    |
| -----       | ------ | ------------------       |
| round_id *  | int    | Fk to `voting_rounds.id` |
| user *      | string | FK to `user.username`    |
| project     | string | FK to `projects.id`      | 

#### team_selection
| Field      | Type   | Notes                                    |
| -----      | ------ | ------------------                       |
| username * | string | FK to `users.username`                   |
| cohort *   | string | FK to `cohort.id`                        |
| pick_1     | int    | project priority 1 (FK to `projects.id`) |
| pick_2     | int    | project priority 2 (FK to `projects.id`) |
| pick_3     | int    | project priority 3 (FK to `projects.id`) |

#### campuses
| Field | Type | Notes |
| --- | --- | --- |
| id * | string | Slug generated from name |
| name | string | name of campus (e.g. Poneke) |

#### admin_users - composite key (campus + username)
| Field | Type | Notes |
| --- | --- | --- |
| campus * | string | FK to `campuses.id` |
| username * | string | FK to `users.username` |



### Global state
``` js
globalState = {
  "projects" = [
    {
      "name": "string", // short title for project
      "description": "string", // elevator pitch
      "owner": "string", // github username
      "team": [ "string", "string" ], //array of github usernames
      "is_archived": false, // true = has been removed from dot voting (voted off)
      "dot_votes": [ // do we need this here at all? Yes? Probably less processing to store it in store?
        { 
          "round_id": 1, // auto integer from db for voting round
          "votes": [ "string", "string", "string" ], //usernames who voted for this thing
          "vote_count": 3 // count of number of votes
        },
        {
          "round_id": 2,
          "votes": [ "string", "string" ],
          "vote_count": 2 // count of number of votes
        }
      ]
    }
  ],
  "
}
```