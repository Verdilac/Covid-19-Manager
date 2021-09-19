import React from 'react'
import { Button, Icon, Image, Modal} from 'semantic-ui-react'
import { Grid, Container} from '@material-ui/core';

import '../../App.css'

const InformationModal = () => {
    const [open, setOpen] = React.useState(false)

    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            trigger={<Button className="I_information_modal_btn">Want to know more about the Inventory?</Button>}
        >
            <Modal.Header className="I_information_modal_title" >About Hospital Inventory</Modal.Header>

            {/* ---------- Modal Content Inside START ---------- */}

            {/* ---------- Content 1 ---------- */}
            <Modal.Content image scrolling className="I_information_modal_content">
                <Container maxWidth="xl" className="containerPadding">
                    <h1 className="I_information_modal_container_question">What is the use of the Inventory dashboard ?</h1> 
                    <Grid container spacing={3} className="I_information_modal_grid_out">

                        <Grid item xs={12} sm={6} md={4} className="I_information_modal_grid_left">
                            <Image size='medium' className="I_information_modal_img" src='/inventory_imgs/p1.jpg' wrapped />
                        </Grid>

                        <Grid item xs={12} sm={6} md={8} className="I_information_modal_grid_right">
                            <Modal.Description>
                                <p>
                                    Tracking of medical products automatically within a hospital is a crucial aspect. 
                                    <br />
                                    Within the inventory dashboard, the user of the system can easily add, update and delete inventory products.
                                    <br />
                                    The goal of this dashboard is to convey current inventory status fast and efficiently.                                
                                </p>
                            </Modal.Description>
                        </Grid>

                    </Grid>
                </Container>
            </Modal.Content>

            {/* ---------- Content 2 ---------- */}
            <Modal.Content image scrolling className="I_information_modal_content">
                <Container maxWidth="xl" className="containerPadding">
                    <h1 className="I_information_modal_container_question">Who has the authority to alter this dashboard ?</h1> 
                    <Grid container spacing={3} className="I_information_modal_grid_out">

                        <Grid item xs={12} sm={6} md={4} className="I_information_modal_grid_left">
                            <Image size='medium' className="I_information_modal_img" src='/inventory_imgs/p2.jpg' wrapped />
                        </Grid>

                        <Grid item xs={12} sm={6} md={8} className="I_information_modal_grid_right">
                            <Modal.Description>
                                <p>
                                    Any user of this system is not authorized to insert information into the inventory. 
                                    <br />
                                    Only official medical staff members assigned by the Hospital can directly use the inventory dashboard.
                                    <br />
                                    Access restrictions have been placed to maintain the integrity of the inventory as it is critical to a Hospital.                               
                                </p>
                            </Modal.Description>
                        </Grid>

                    </Grid>
                </Container>
            </Modal.Content>

            {/* ---------- Content 3 ---------- */}
            <Modal.Content image scrolling className="I_information_modal_content">
                <Container maxWidth="xl" className="containerPadding">
                    <h1 className="I_information_modal_container_question">Who is this dashboard for ?</h1> 
                    <Grid container spacing={3} className="I_information_modal_grid_out">

                        <Grid item xs={12} sm={6} md={4} className="I_information_modal_grid_left">
                            <Image size='medium' className="I_information_modal_img" src='/inventory_imgs/p4.jpg' wrapped />
                        </Grid>

                        <Grid item xs={12} sm={6} md={8} className="I_information_modal_grid_right">
                            <Modal.Description>
                                <p>
                                    The content of the inventory dashboard is addressed for Pharmacists and Doctors.
                                    <br />
                                    Decisions such as what additional products to be ordered next, 
                                    low quantity products and soon to expire products can be made by viewing this dashboard.
                                    <br />
                                    This will lead to efficient stock management.
                                </p>
                            </Modal.Description>
                        </Grid>

                    </Grid>
                </Container>
            </Modal.Content>

            {/* ---------- Modal Content Inside END ---------- */}

            <Modal.Actions className="I_information_modal_actions_button_section">
                <Button onClick={() => setOpen(false)} primary className="I_information_modal_actions_button">
                    Explore <Icon name='chevron right' />
                </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default InformationModal;