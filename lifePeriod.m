classdef lifePeriod
    %UNTITLED Summary of this class goes here
    %   Detailed explanation goes here
    
    properties
        totalTime
        periodTime
        startTime
        stopTime
        inProgress
        name
        skew
    end
    
    methods
        function obj = lifePeriod(periodName, totalTime, startTime, stopTime, skew)
            %UNTITLED Construct an instance of this class
            %   Detailed explanation goes here
            if ~exist('skew')
                skew = [];
            end
            obj.totalTime = totalTime;
            obj.startTime = startTime;
            obj.stopTime = stopTime;
            if isempty(skew)
                skew = length(startTime : stopTime) / 100;
            elseif islogical(skew) && skew == true
                skew = length(startTime : stopTime);
            elseif islogical(skew) && skew == false
                skew = 0;
            end
            if skew ~= 0
                skewUp = [1:skew] ./ max(1:skew);
                skewDown = [skew:-1:1] ./ max(skew:-1:1);
            else
                skewUp = [];
                skewDown = [];
            end
            obj.periodTime = startTime - skew : stopTime + skew;
            obj.inProgress = [skewUp ones(1, length(startTime : stopTime)) skewDown];
            if length(obj.inProgress) > length(obj.periodTime)
                obj.inProgress = obj.inProgress(1:length(obj.periodTime));
            elseif length(obj.periodTime) > length(obj.inProgress) 
                obj.periodTime = obj.periodTime(1:length(obj.inProgress));
            end
            
            obj.name = periodName;
            obj.skew = skew;
        end
        
        function outputArg = method1(obj,inputArg)
            %METHOD1 Summary of this method goes here
            %   Detailed explanation goes here
            outputArg = obj.Property1 + inputArg;
        end
    end
end

