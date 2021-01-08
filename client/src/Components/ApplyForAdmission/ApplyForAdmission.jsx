import React, {Component} from 'react';


export default class ApplyForAdmission extends Component{

    state = {
        search:''
    }

   searchInput = (ev) => {
      this.setState({
          search: ev.target.value
      })
   }

    render(){
        const {search} = this.state;
        const {classes, aos} = this.props;
        
        return (<form action="#"  className={`apply-form ${classes || null}`} data-aos={aos}>
          <h4 className="apply-form__h u-margin-bottom-small">Apply for admission</h4>
          <p className="apply-form__p u-margin-bottom-tiny">Make it more simple</p>
          <div className="apply-form__input-box">
          <input type="text" className="apply-form__input" name="search" placeholder="Enter yor email..." onChange={this.searchInput}/>
          <button className="apply-form__btn">&nbsp;</button>
          </div>
        </form>)
    }
}