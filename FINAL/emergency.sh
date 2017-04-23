#!/bin/sh

mntroot rw

tar xvf /mnt/us/mod-pl*.tar.gz
rm /mnt/us/mod-pl*.tar.gz

mntroot ro
sync

rm /mnt/us/emergency.sh

reboot
