#!/bin/bash

database="projects"

echo "Configuring database $database"

dropdb -U node_user $database;

createdb -U node_user $database;

psql -U node_user $database < ./bin/sql/initialData.sql

echo "$database configured"