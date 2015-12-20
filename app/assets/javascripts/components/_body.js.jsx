var Body = React.createClass({
   getInitialState(){
    return { skills: [] }
  },

  componentDidMount() {
    $.getJSON('/api/v1/skills.json', (response) => { this.setState({ skills: response }) });
  },

  handleSubmit(skill) {
    let newState = this.state.skills.concat(skill);
    this.setState({skills: newState })
  },

  render() {
    return (
      <div>
        <h2>All Skills Below</h2>
        <NewSkill handleSubmit={this.handleSubmit} />
        <AllSkills skills={this.state.skills}/>
      </div>
    )
  }
});