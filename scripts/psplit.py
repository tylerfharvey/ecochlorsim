fcomb = open('bwts-combined.js', 'r')

for rline in fcomb:
    # if //filestart open new file by name after filestart
    if (len(rline) > 11 and rline[:11] == '//filestart'):
        nfilename = rline[12:-1]
        findiv = open('split/' + nfilename, 'w')
        #if //filestop close file
    elif (len(rline) > 10 and rline[:10] == '//filestop'):
        findiv.close()
    else:
        findiv.write(rline)
