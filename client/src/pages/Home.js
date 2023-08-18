import React from "react";
import Navbar from "../components/Navbar";
import Button from "@material-ui/core/Button";
import { useStyles } from "../components/Styles";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

export default function Home() {
  const classes = useStyles();
  const navItem = [];

  return (
    <>
      <div className={classes.pageWrap}>
        <Navbar navItems={navItem}>
          <Grid
            container
            spacing={3}
            className={classes.Explorerroot}
          >
            <Grid
              item
              xs={12}
              sm={6}
              className={classes.ExplorerGrid}
              style={{ height: "80vh", width: "85vw", overflowx:"hidden" }}
            >
              <img
                alt="."
                src="/homeArt.png"
                className={classes.ExplorerImage}
                style={{ height: "85vh", width: "85vw"}}
              />
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              className={classes.ExplorerGrid}
            >
              <div className={classes.HomeCardWrap}>
                <h1 className={classes.pageHeading}>Assign Roles</h1>
                <Link
                  to="/roleAdmin"
                  className={classes.HomeLink}
                >
                  <Button
                    className={classes.HomeBtn}
                    size="large"
                    variant="outlined"
                    color="primary"
                  >
                    Assign
                  </Button>
                </Link>
                <br />

                <h1 className={classes.pageHeading}>Visit As</h1>
                <Link
                  to="/manufacturer/manufacture"
                  className={classes.HomeLink}
                >
                  <Button
                    className={classes.HomeBtn}
                    size="large"
                    variant="outlined"
                    color="primary"
                  >
                    Manufacturer
                  </Button>
                </Link>
                <Link
                  to="/ThirdParty/allProducts"
                  className={classes.HomeLink}
                >
                  <Button
                    className={classes.HomeBtn}
                    size="large"
                    variant="outlined"
                    color="primary"
                  >
                    Third party
                  </Button>
                </Link>
                <Link
                  to="/DeliveryHub/receive"
                  className={classes.HomeLink}
                >
                  <Button
                    className={classes.HomeBtn}
                    size="large"
                    variant="outlined"
                    color="primary"
                  >
                    Delivery hub
                  </Button>
                </Link>
                <Link
                  to="/Customer/buy"
                  className={classes.HomeLink}
                >
                  <Button
                    className={classes.HomeBtn}
                    size="large"
                    variant="outlined"
                    color="primary"
                  >
                    Customer
                  </Button>
                </Link>
              </div>
            </Grid>
          </Grid>
        </Navbar>
      </div>
    </>
  );
}
