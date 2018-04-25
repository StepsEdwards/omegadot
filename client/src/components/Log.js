// Test Pull
import React from 'react';
import ReactTable from 'react-table';
import 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadLog } from '../actions/log';
import _ from "lodash";

class Log extends React.Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    this.getLog();
  }

  async getLog() {
    const { loadLogAction } = this.props;

    await fetch(
      '/log',
      {
        method: 'GET',
        credentials: 'same-origin',
      },
    )
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        return null
      })
      .then((json) => {
        loadLogAction(json);
      })
      .catch((error) => {
        // Error handling here.
      });
  }

  getFormattedDate(data) {
    let date = new Date(data.time)
    return date.toDateString() + " at " + date.toLocaleTimeString('en-US');
  }

  render() {
    const { log } = this.props;
    return (
      <div className="container text-left mt-5">
        <h2>LOG</h2>
        <ReactTable
          data={log}
          columns={[
            {
              Header: 'Event Type',
              accessor: 'type'
            },
            {
              Header: 'Performed by',
              accessor: 'changedBy'
            },
            {
              Header: 'Date and Time',
              id: 'time',
              accessor: d => this.getFormattedDate(d),
              Cell: row => (
                <span>
                  {row.value}
                </span>
              )
            }
          ]}
          SubComponent={e => {
            console.log(e);
            if (e.row._original.data) {
              return (
                <div style={{ padding: "20px" }}>
                  { e.row._original.data.description &&
                  <p>Description: {e.row._original.data.description}</p>
                  }
                  <p>The following credits and debits were applied during this transaction.</p>
                  <ReactTable
                    data={e.row._original.data.debits}
                    columns={[
                      {
                        Header: 'Accounts',
                        accessor: 'account',
                        Cell: row => (
                          <div className="text-center">
                            {row.value}
                          </div>
                        ),
                      },
                      {
                        Header: 'Debit',
                        accessor: 'amount',
                        Cell: row => (
                          <div className="text-center">
                            {row.value}
                          </div>
                        )
                      },
                      {
                        Header: 'Credit',
                        id: 'index',
                        accessor: d => <div className="text-center">-</div>,
                      },
                    ]}
                    defaultPageSize={e.row._original.data.debits.length}
                    showPaginationBottom={false}
                  />
                  <ReactTable
                    data={e.row._original.data.credits}
                    columns={[
                      {
                        accessor: 'account',
                        Cell: row => (
                          <div className="text-center">
                            {row.value}
                          </div>
                        )
                      },
                      {
                        id: 'index',
                        accessor: d => <div className="text-center">-</div>,
                      },
                      {
                        accessor: 'amount',
                        Cell: row => (
                          <div className="text-center">
                            {row.value}
                          </div>
                        ),
                        Footer: (
                          <span style={{ "border-bottom": "3px double" }}>
                          </span>
                        )
                      }
                    ]}
                    defaultPageSize={e.row._original.data.credits.length}
                    showPaginationBottom={false}
                  />
                </div>
              );
            }
            else if (e.row._original.type == "Account Created") {
              return(
                <div style={{ padding: "20px" }}>
                  <p>{e.row._original.changedBy} created the <b>{e.row._original.name}</b> account.</p>
                </div>
              );
            }
          }}
          defaultSorted={[
            {
              id: "time",
              desc: true
            }
          ]}
          className="-striped -highlight"
          defaultPageSize={10}
        />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    loadLogAction: loadLog,
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    log: state.log,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Log);

