var AllSkills = React.createClass({

  render() {
    var skills = this.props.skills.map((skill, index) => {
      return (
        <div key={index}>
          <div>
            <h3>{skill.name}</h3>
            <p><strong>Level:</strong> {skill.level}</p>
            <p>{skill.details}</p>
          </div>
        </div>
      )
    });

    return(
      <div>
        {skills}
      </div>
    )
  }

})  ;

