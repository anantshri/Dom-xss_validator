if [ $# -gt 0 ]
then
	while read p;
	do
	  echo "Input: "$p
	  inp=`echo $p | base64`
	  echo $inp
	  phantomjs verifier.js $inp
	  echo "Moving on"
	done<$1
else
	echo "Please provide a valid file with input list"
fi
