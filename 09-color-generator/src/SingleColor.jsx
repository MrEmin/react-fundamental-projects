import { toast } from 'react-toastify'

const SingleColor = ({ color, index, length }) => {
  const { hex, weight } = color
  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`)
        toast.success(`Color copied to clipboard!`)
      } catch (error) {
        toast.error(`Failed to copy color to clipboard`)
      }
    } else {
      toast.error('Clipboard access not available')
    }
  }
  return (
    <article
      className={index > length ? 'color-light color' : 'color'}
      style={{
        background: `#${hex}`,
      }}
      onClick={saveToClipboard}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>#{hex}</p>
    </article>
  )
}
export default SingleColor
