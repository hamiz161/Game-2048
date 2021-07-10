class Cell extends React.Component {
  cellValue(props) {
    return this.props.num == 0 ? '' : this.props.num
  }

  render() {
    const defineClass = (option) => {
      return 'class="' + option + '"'
    }

    return (
      <div className='col'>
        <div className={'cell-' + this.props.num}>{this.cellValue()}</div>
      </div>
    )
  }
}
