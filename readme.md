# Amateur Radio Exam Practice

This is a web application that can be used to help you study for
the amateur radio exams.

The questions are currently from [insert address here for the
github]

## QuestionList

The **QuestionList** component is used to display the questions. It uses the
**QuestionItem** component to display the actual questions. **QuestionList** is just a **\<ul>**
and QuestionItem are the **\<li>** tags.

The actual content of the **QuestionItem** is wrapped in a
**QuestionContainer** which just adds some styling for the
questions.

```javascript
// QuestionList takes an array of questions
<QuestionList questions={questions} />
```

### The Question Object

The questions are going to be received from the database and they
must follow the format below:

```json
{
  "id": "T1A04",
  "correct": 0,
  "question": "How many operator/primary station license grants may be held by any one person?",
  "answers": [
    "One",
    "No more than two",
    "One for each band on which the person plans to operate",
    "One for each permanent station location from which the person plans to operate"
  ]
}
```
