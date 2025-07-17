#! /bin/bash

ls -la 1>file1.txt 2>errorlog.txt
ls -la >& file1.txt	# if you wanna save the info and the errorlog in the same file

