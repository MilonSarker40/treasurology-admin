import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import InFlowTableData from "./InFlowTableData";
import Classes from "../../styles/moneyblotter.module.css";

const InFlowTable = () => {

    const [visibleItem, setVisibleItem] = useState(null);

    const toggleVisibility = (itemName) => {
        setVisibleItem(visibleItem === itemName ? null : itemName);
    };

  return (
    <div className={`${Classes.in__flow__table}`}>
      <Table>
        <tbody>
          <tr>
            <td>FX Forward</td>
            <td>100,000,000,000.00</td>
          </tr>
          <tr>
            <td>SWAP</td>
            <td>100,000,000,000.00</td>
          </tr>
          <tr>
            <th onClick={() => toggleVisibility("Customer RTGS")} style={{cursor:'pointer'}}>Customer RTGS</th>
            <th>100,000,000,00000.00</th>
          </tr>
          {visibleItem === "Customer RTGS" &&
          <>
            <tr>
              <td>Robi</td>
              <td>100,000,000,000.00</td>
            </tr>
            <tr>
              <td>GP</td>
              <td>100,000,000,000.00</td>
            </tr>
            <tr>
              <td>Mrinmoy K</td>
              <td>100,000,000,000.00</td>
            </tr>
            <tr>
              <td>Mrinmoy K</td>
              <td>100,000,000,000.00</td>
            </tr>
          </>
          }
          <tr>
            <th onClick={() => toggleVisibility("Customer BB Cheque")} style={{cursor:'pointer'}}>Customer BB Cheque</th>
            <th>100,000,000,00000.00</th>
          </tr>
          {visibleItem === "Customer BB Cheque" &&
          <>
            <tr>
                <td>City Group</td>
                <td>100,000,000,000.00</td>
            </tr>
            <tr>
                <td>Jamuna Group</td>
                <td>100,000,000,000.00</td>
            </tr>
            <tr>
                <td>Tapash</td>
                <td>100,000,000,000.00</td>
            </tr>
          </>
          }
          <tr>
            <th onClick={() => toggleVisibility("BEFTN")} style={{cursor:'pointer'}}>BEFTN</th>
            <th>100,000,000,00000.00</th>
          </tr>
          {visibleItem === "BEFTN" &&
          <>
            <tr>
                <td>City Group</td>
                <td>100,000,000,000.00</td>
            </tr>
            <tr>
                <td>Jamuna Group</td>
                <td>100,000,000,000.00</td>
            </tr>
            <tr>
                <td>Tapash</td>
                <td>100,000,000,000.00</td>
            </tr>
          </>
          }
          <tr>
            <th onClick={() => toggleVisibility("BACH")} style={{cursor:'pointer'}}>BACH</th>
            <th>100,000,000,00000.00</th>
          </tr>
          {visibleItem === "BACH" &&
          <>
            <tr>
                <td>High Value</td>
                <td>100,000,000,000.00</td>
            </tr>
            <tr>
                <td>Regular Value</td>
                <td>100,000,000,000.00</td>
            </tr>
            <tr>
                <td>High Value Return</td>
                <td>100,000,000,000.00</td>
            </tr>
            <tr>
                <td>Regular Value Return</td>
                <td>100,000,000,000.00</td>
            </tr>
          </>
          }
          <tr>
            <th onClick={() => toggleVisibility("Others")} style={{cursor:'pointer'}}>Others</th>
            <th>100,000,000,00000.00</th>
          </tr>
          {visibleItem === "Others" &&
          <>
            <tr>
                <td>Others 1</td>
                <td>100,000,000,000.00</td>
            </tr>
          </>
          }
          <tr>
            <td
              style={{ borderBottom: "0", color: "#27AE60", fontWeight: "600" }}
            >
              Total In Flow
            </td>
            <td
              style={{ borderBottom: "0", color: "#27AE60", fontWeight: "600" }}
            >
              100,000,000,0000.00
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default InFlowTable;
