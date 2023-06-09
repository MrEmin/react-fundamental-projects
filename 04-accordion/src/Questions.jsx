import SingleQuestion from './SingleQuestion'
const Questions = ({ questions }) => {
  return (
    <section className='container'>
      <h1>Questions</h1>
      {questions.map((question) => (
        <SingleQuestion {...question} key={question.id} />
      ))}
    </section>
  )
}
export default Questions
