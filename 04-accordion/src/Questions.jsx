import SingleQuestion from './SingleQuestion'
const Questions = ({ questions, activeId, toggleQuestion }) => {
  return (
    <section className='container'>
      <h1>Questions</h1>
      {questions.map((question) => (
        <SingleQuestion
          {...question}
          key={question.id}
          activeId={activeId}
          toggleQuestion={toggleQuestion}
        />
      ))}
    </section>
  )
}
export default Questions
