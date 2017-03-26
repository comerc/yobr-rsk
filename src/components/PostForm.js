import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from 'src/ducks/postForm'
import { handleSubmit } from 'src/core/utils'
import s from '../styles/PostForm.css'
import PostFormIsTutorial from './PostFormIsTutorial'
import PostFormFlow from './PostFormFlow'
import PostFormTitle from './PostFormTitle'
import PostFormContent from './PostFormContent'
import PostFormSearchHub from './PostFormSearchHub'
import PostFormHubs from './PostFormHubs'
import PostFormIsTranslation from './PostFormIsTranslation'
import PostFormSourceAuthor from './PostFormSourceAuthor'
import PostFormSourceLink from './PostFormSourceLink'
import PostFormSubmit from './PostFormSubmit'
import Link from './Link'

// Q: можно ли объявить компонент чистым, если в props - router?
// A: да, PureComponent применяет неглубокое сравнение

// применение defaultValue нарушает работу Redux DevTools TimeTravel

// применение value без onChange={doChange} ругается (но не Material-UI):
// Warning: Failed form propType: You provided a `value` prop to a form field
// without an `onChange` handler. This will render a read-only field.
// If the field should be mutable use `defaultValue`. Otherwise, set either
// `onChange` or `readOnly`.

const PostForm = ({
  id, flow, title, content, hubs, isTranslation, sourceAuthor, sourceLink,
  isTutorial, searchHub, sourceFlows, sourceHubs, errors, isLoading, mainError,
  input, save
}) => (
  <div className={s.root}>
    <div className={s.container}>
      <h1>{!!id ? 'Редактирование публикации' : 'Хочу разместить публикацию'}</h1>
      <form onSubmit={handleSubmit(isLoading, save)} autoComplete="off">
        <PostFormIsTutorial {...{ isTutorial, input }} />
        <PostFormFlow {...{ flowId: flow.id, sourceFlows, input, error: errors.flow }} />
        <PostFormTitle {...{ title, input, error: errors.title }} />
        <PostFormContent {...{ content, input, error: errors.content }} />
        <PostFormSearchHub {...{ searchHub, sourceHubs, hubs, input, error: errors.searchHub }} />
        <PostFormHubs {...{ hubs, input, error: errors.searchHub }} />
        <PostFormIsTranslation {...{ isTranslation, input }} />
        <PostFormSourceAuthor {...{ sourceAuthor, isTranslation, input, error: errors.sourceAuthor }} />
        <PostFormSourceLink {...{ sourceLink, isTranslation, input, error: errors.sourceLink }} />
        <PostFormSubmit {...{ isLoading }} />
      </form>
      <br/>
      {!!mainError && <div>{mainError}</div>}
    </div>
  </div>
)

PostForm.propTypes = {
  id: PropTypes.number,
  flow: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }),
  title: PropTypes.string,
  content: PropTypes.string,
  hubs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  isTranslation: PropTypes.bool,
  sourceAuthor: PropTypes.string,
  sourceLink: PropTypes.string,
  isTutorial: PropTypes.bool,
  errors: PropTypes.object,
  isLoading: PropTypes.bool,
  mainError: PropTypes.string,
  sourceFlows: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  searchHub: PropTypes.string,
  sourceHubs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  input: PropTypes.func,
  save: PropTypes.func,
}

// выполняю приведение типа для undefined значений булевых props

const mapStateToProps = (state) => ({
  ...state.postForm,
  isTranslation: !!state.postForm.isTranslation,
  isTutorial: !!state.postForm.isTutorial,
  isLoading: state.app.isLoading,
  mainError: state.app.mainError,
  sourceFlows: state.flows,
  sourceHubs: state.hubs,
})

const mapDispatchToProps = (dispatch) => {
  const { input, save } = actions
  return bindActionCreators({ input, save }, dispatch)
}

export default withStyles(s)(connect(mapStateToProps, mapDispatchToProps)(PostForm))
