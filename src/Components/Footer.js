import { Box, Typography, Grid, Divider, IconButton } from "@mui/material";
import React from "react";
import { FaFacebook, FaGithub, FaXTwitter, FaYoutube } from "react-icons/fa6";

export default function Footer() {
	return (
		<>
			<Box component="footer" sx={{ bgcolor: "black", color: "white", p: 3, px: { md: 8, xs: 2 } }}>
				<Box sx={{ display: "flex", px: { md: 4, xs: 2 }, py: { md: 1, xs: 1 } }}>
					<Typography variant="body1" sx={{ pt: 1, pr: 3 }}>
						Follow us
					</Typography>
					<IconButton component="a" href="/" target="_blank">
						<FaXTwitter size="20px" />
					</IconButton>
					<IconButton component="a" href="/" target="_blank">
						{" "}
						<FaFacebook size="20px" />{" "}
					</IconButton>

					<IconButton component="a" href="/" target="_blank">
						{" "}
						<FaGithub size="20px" />{" "}
					</IconButton>

					<IconButton component="a" href="/" target="_blank">
						{" "}
						<FaYoutube size="20px" />{" "}
					</IconButton>
				</Box>
				<Divider />
				<Box>
					<Grid container sx={{ py: { md: 2, xs: 2 } }}>
						<Grid item md={6} xs={6}>
							<Typography
								component="a"
								href="/"
								variant="h6"
								sx={{
									fontWeight: 600,
									px: { md: 3, xs: 2 },
									py: { md: 0, xs: 2 },
									textDecoration: "none",
									color: "white"
								}}
							>
								SomeCompany
							</Typography>
						</Grid>
						<Grid item md={6} xs={12}>
							<Box sx={{ display: { md: "flex", xs: "block" } }}>
								<Typography
									component="a"
									href="/"
									target="_blank"
									rel="noopener noreferrer"
									variant="body1"
									sx={{ p: 2, textDecoration: "none", color: "white" }}
								>
									Blogs
								</Typography>
								<Typography
									component="a"
									href=""
									target="_blank"
									rel="noopener noreferrer"
									variant="body1"
									sx={{ p: 2, textDecoration: "none", color: "white" }}
								>
									Product1
								</Typography>
								<Typography
									component="a"
									href="/"
									target="_blank"
									rel="noopener noreferrer"
									variant="body1"
									sx={{ p: 2, textDecoration: "none", color: "white" }}
								>
									Product2
								</Typography>
								<Typography
									component="a"
									href=""
									target="_blank"
									rel="noopener noreferrer"
									variant="body1"
									sx={{ p: 2, textDecoration: "none", color: "white" }}
								>
									Developers
								</Typography>
								<Typography variant="body1" sx={{ p: 2 }}>
									© 2024 SomeCompany
								</Typography>
							</Box>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</>
	);
}
