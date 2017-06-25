const BlogList = ({items, incrementLikes}) => (
  DOM.ul(
    null,
    _.map(
      items,
      (item) => (
        <li key={item.id}>
          <BlogItem {...item} incrementLikes={ incrementLikes }/>
        </li>
      )
    )
  )
)
