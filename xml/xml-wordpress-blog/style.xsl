<?xml version="1.0" encoding="utf-8" ?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">


	<xsl:output method="html"
	doctype-public="-//W3C//DTD HTML 4.01//EN" 
	doctype-system="http://www.w3.org/TR/html4/strict.dtd"/>
	
	
	<xsl:template match="/">
	
		<html>
		
			<head>
				<title>XML Blog</title>
				<link rel="stylesheet" href="style.css" type="text/css" media="screen" />
			</head>
			
			<body>
			
				<xsl:apply-templates />
			</body>
		</html>
	
	
	</xsl:template>
	
	<xsl:template match="page">
	
		<div id="page">
		
			<xsl:apply-templates/>
		</div>
	
	
	</xsl:template>
	
	<xsl:template match="headerimg">
	
		<div id="headerimg">
		
			<xsl:apply-templates/>
		
		</div>
	
	
	</xsl:template>
	
	<xsl:template match="h1">
	
		<h1>
			<xsl:value-of select="."/>
		</h1>
	
	
	</xsl:template>
	
	<xsl:template match="description">
	
		<div class="description">
			<xsl:value-of select="."/>
		</div>
	
	
	</xsl:template>
	
	<xsl:template match="content">
	
		<div id="content">
			<xsl:apply-templates />
		</div>
	</xsl:template>
	
	<xsl:template match="post">
	
		<div class="post">
			<xsl:apply-templates/>
		</div>
	</xsl:template>
	
	<xsl:template match="h2">
		<h2>
			<xsl:value-of select="."/>
		</h2>
	</xsl:template>
	
	<xsl:template match="date">
		<small>
			<xsl:value-of select="."/>
		</small>
	</xsl:template>
	
	<xsl:template match="entry">
		<div class="entry">
			<xsl:apply-templates/>
		</div>
	</xsl:template>
	
	<xsl:template match="p">
	
		<p>
			<xsl:value-of select="."/>
		</p>
	
	
	</xsl:template>
	
	<xsl:template match="postmetadata">
	
		<p class="postmetadata">
		
			
			<xsl:apply-templates />
		</p>
	
	
	</xsl:template>
	
	<xsl:template match="link">
		<a href="{@url}">
			<xsl:value-of select="."/>
		</a>
	</xsl:template>
	
	<xsl:template match="sidebar">
	
		<div id="sidebar">
			<form action="#" method="get" id="searchform">
				<div>
					<input type="text" name="s" id="s" />
					<input type="submit" name="searchsubmit" id="searchsubmit" value="Search" />
				</div>
			</form>
			
			<xsl:apply-templates/>
		</div>
	
	</xsl:template>
	
	<xsl:template match="ulist">
	
		<ul>
			<xsl:for-each select="item">
				<li>
					<xsl:apply-templates/>
				</li>
			</xsl:for-each>
		</ul>
	
	</xsl:template>
	
	<xsl:template match="footer">
	
		<div id="footer">
		
			<xsl:apply-templates />
		</div>
	
	</xsl:template>
</xsl:stylesheet>