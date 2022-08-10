import axios from 'axios'
import Table from 'src/views/dashboard/Table'

export default class HomePage {
  state = {
    orders: []
  }
  didmount() {
    axios.get('http://localhost:8010/api/orders/').then(res => {
      const orders = res.data
      this.setState({ orders })
    })
  }

  render() {
    return (
      <div>
        <Table />
      </div>
    )
  }
}
