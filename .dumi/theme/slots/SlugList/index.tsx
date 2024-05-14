import React, { FC  } from 'react'
import { NavLink } from 'dumi'

import './index.less'

type Slug = {
  depth: number
  id: string
  title: string
}

interface Props {
  slugs: Slug[] | undefined
}

const SlugList: FC<Props> = props => {
  const { slugs } = props;
  
  if (!slugs) return null;
  return (
    <div className='adm-doc-toc'>
      <ul role='slug-list'>
        {slugs
          .filter(({ depth }) => depth > 1 && depth < 4)
          .map(slug => {    
            return (
              <li key={slug.id} title={slug.title} data-depth={slug.depth}>
                <NavLink to={`#${slug.id}`} title={slug.title}>
                  <span>{slug.title}</span>
                </NavLink>
              </li>
            )
          }

          )}
      </ul>
    </div>
  )
}

export default SlugList;