import Picture from '../components/picture'
import Youtube from '../components/youtube'
import { INLINES, BLOCKS } from '@contentful/rich-text-types'

const renderProps = {
    renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: node => {
            let { description, file } = node.data.target.fields
            let { width, height } = file.details.image

            return (
                <Picture src={file.url} alt={description}/>
            )
        },
        [BLOCKS.UL_LIST]: (node, children) => (<ul style={{ listStyle: 'disc' }}>{ children }</ul>),
        [BLOCKS.OL_LIST]: (node, children) => (<ol style={{ listStyle: 'decimal' }}>{ children }</ol>),
        [BLOCKS.LIST_ITEM]: (node, children) => <li style={{ margin: '0 0 10px 30px' }}>{ children }</li>,
        [INLINES.HYPERLINK]: ({ data }, children) => {
            let linkBlock
            let url = data.uri
            
            if (url.includes("youtube.com/embed")) {
                linkBlock = <Youtube url={url}/>
            } else {
                linkBlock = <a
                  style={{ textDecoration: 'underline' }}
                  href={url}
                  target='_blank'
                >{children}</a>
            }

            return linkBlock
        }
    },
}

export default renderProps